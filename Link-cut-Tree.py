# Link-Cut Tree (splay-based) with path sum aggregation
# Supports: makeRoot(u), link(u, v), cut(u, v), connected(u, v),
#          updateValue(u, val), pathSum(u, v), findRoot(u)
#
# Complexity: amortized O(log n) per operation.

class Node:
    __slots__ = ('val', 'sum', 'left', 'right', 'parent', 'rev')
    def __init__(self, val=0):
        self.val = val      # node's own value
        self.sum = val      # subtree/path aggregate (sum)
        self.left = None
        self.right = None
        self.parent = None
        self.rev = False    # for lazy path reversal

def isRoot(x):
    return x.parent is None or (x.parent.left is not x and x.parent.right is not x)

def pushUp(x):
    x.sum = x.val
    if x.left:
        x.sum += x.left.sum
    if x.right:
        x.sum += x.right.sum

def pushDown(x):
    if x.rev:
        x.left, x.right = x.right, x.left
        if x.left:
            x.left.rev ^= True
        if x.right:
            x.right.rev ^= True
        x.rev = False

def rotate(x):
    p = x.parent
    g = p.parent
    if not isRoot(p):
        if g.left is p:
            g.left = x
        else:
            g.right = x
    x.parent = g

    if p.left is x:
        p.left = x.right
        if x.right:
            x.right.parent = p
        x.right = p
        p.parent = x
    else:
        p.right = x.left
        if x.left:
            x.left.parent = p
        x.left = p
        p.parent = x
    pushUp(p)
    pushUp(x)

def splay(x):
    # bring x to the top of its splay tree
    ancestors = []
    y = x
    while True:
        ancestors.append(y)
        if y.parent is None:
            break
        y = y.parent
    # push all pending reversals down
    for node in reversed(ancestors):
        pushDown(node)

    while not isRoot(x):
        p = x.parent
        g = p.parent
        if not isRoot(p):
            if (g.left is p) == (p.left is x):
                rotate(p)  # zig-zig
            else:
                rotate(x)  # zig-zag
        rotate(x)
    pushUp(x)

def access(x):
    # makes x the rightmost node in the preferred path from root to x
    last = None
    cur = x
    while cur:
        splay(cur)
        cur.right = last
        pushUp(cur)
        last = cur
        cur = cur.parent
    splay(x)
    return last

def makeRoot(x):
    access(x)
    x.rev ^= True
    pushDown(x)  # optional to reflect immediate structure

def findRoot(x):
    access(x)
    # go to leftmost node
    cur = x
    while True:
        pushDown(cur)
        if cur.left:
            cur = cur.left
        else:
            break
    splay(cur)
    return cur

def connected(u, v):
    if u is v:
        return True
    return findRoot(u) is findRoot(v)

def link(u, v):
    # link u as child of v (connect two trees). Precondition: not connected
    makeRoot(u)
    if findRoot(v) is not u:
        u.parent = v

def cut(u, v):
    makeRoot(u)
    access(v)
    # after access(v), v is root of its splay, and u should be v.left if edge u-v exists
    # ensure that v.left is u and u has no right child (edge directly u-v)
    if v.left is u and u.right is None:
        v.left.parent = None
        v.left = None
        pushUp(v)

def updateValue(x, newVal):
    splay(x)
    x.val = newVal
    pushUp(x)

def pathSum(u, v):
    makeRoot(u)
    access(v)
    # now v.sum contains sum over path u-v
    return v.sum

# Utility to build nodes list and simple interface
def buildNodes(values):
    return [None] + [Node(val) for val in values]  # 1-indexed

# Example usage / basic tests
if __name__ == "__main__":
    # Build 7 nodes with initial values 1..7
    nodes = buildNodes([1,2,3,4,5,6,7])  # nodes[1]..nodes[7]

    # Helper shorthand
    def n(i): return nodes[i]

    # Link edges to make a tree: 1-2, 2-3, 3-4, 3-5, 5-6, 2-7
    link(n(1), n(2))
    link(n(2), n(3))
    link(n(3), n(4))
    link(n(3), n(5))
    link(n(5), n(6))
    link(n(2), n(7))

    # Query path sums
    print("pathSum(1,4) should be 1+2+3+4 = 10 :", pathSum(n(1), n(4)))
    print("pathSum(6,7) should be 6+5+3+2+7 = 23 :", pathSum(n(6), n(7)))

    # Update a value
    updateValue(n(3), 30)  # set node 3 value from 3 -> 30
    print("After update: pathSum(1,4) should be 1+2+30+4 = 37 :", pathSum(n(1), n(4)))
    print("After update: pathSum(6,7) should be 6+5+30+2+7 = 50 :", pathSum(n(6), n(7)))

    # Cut an edge and check connectivity
    cut(n(3), n(5))  # remove edge 3-5
    print("Connected 6 and 1 after cut? (should be False):", connected(n(6), n(1)))
    # Link 6 to 4
    link(n(6), n(4))
    print("Connected 6 and 1 after re-link? (should be True):", connected(n(6), n(1)))
    print("pathSum(6,1) now:", pathSum(n(6), n(1)))
