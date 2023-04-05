'''
# 정점 0번부터 5번 간선수 8개
# 0번에서 1번까지 가는 길 2 이런식
5 8
0 1 2
0 2 4
1 2 1
1 3 7
2 4 3
3 4 2
3 5 1
4 5 5
'''
def dij(s,V): # s출발, v마지막 정점 번호
    U=[0] * (V+1) # U :최소 비용이 결정된 정점 집합
    U[s]=1 # U={s}

    # while U!=V: 남은 정점의 비용 결정
    for i in range(V+1): # s에서 나머지 정점 i로 가는 비용
        D[i]=adjM[s][i]

    N=V+1
    for _ in range(N-1):
        minV=INF
        w=0
        for i in range(V+1):
            if U[i]==0 and minV>D[i]: # 남은 정점 i중에 최소를 찾는다
                w=i # i를 후보로 정하겠어
                minV=D[i]
        U[w]=1 # 최소인 w는 최소 비용 D[w] 확정
        # w에 인접인 정점에 대해, 기존비용 vs w를 거쳐가는 비용 비교
        for v in range(V+1):
            if 0<adjM[w][v]<INF: # w에 인접인 v의 조건(w에서 v로 가는 비용)
                D[v]=min(D[v],D[w]+adjM[w][v])

INF=10000 # 문제에 따라 정함
V,E=map(int, input().split()) #0~V번 정점, E 간선 수
adjM=[[INF]*(V+1) for _ in range(V+1)]
for i in range(V+1):
    adjM[i][i]=0 # 자기 자신으로 가는 비용은 다 0으로 만들어놓음

for _ in range(E):
    u,v,w=map(int, input().split())
    adjM[u][v]=w

D= [0]*(V+1)
dij(0,V)
print(D)