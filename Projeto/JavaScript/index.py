# inicialização das variáveis
total = 0
tinto = 0
branco = 0
rose = 0

# loop de entrada de dados
while True:
    vinho = input("Digite o tipo de vinho (T para tinto, B para branco, R para rosé, ou F para finalizar): ")
    if vinho == "F":
        break
    quantidade = int(input("Digite a quantidade de garrafas: "))
    if vinho == "T":
        tinto += quantidade
    elif vinho == "B":
        branco += quantidade
    elif vinho == "R":
        rose += quantidade
    total += quantidade

# cálculo das porcentagens
if total > 0:
    p_tinto = tinto/total*100
    p_branco = branco/total*100
    p_rose = rose/total*100
else:
    p_tinto = p_branco = p_rose = 0

# exibição dos resultados
print(f"Total de garrafas: {total}")
print(f"Porcentagem de vinhos tintos: {p_tinto:.2f}%")
print(f"Porcentagem de vinhos brancos: {p_branco:.2f}%")
print(f"Porcentagem de vinhos rosé: {p_rose:.2f}%")
