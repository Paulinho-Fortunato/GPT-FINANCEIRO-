def calcular_poupanca(despesas, renda):
    total_despesas = sum(despesas)
    sobra = renda - total_despesas
    return max(sobra, 0)
