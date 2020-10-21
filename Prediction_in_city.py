def caluculate_risk(population, r, ill):
	import math
	city_risk = (math.log2((population/1300000)*6+2)-1)/4 + 1
	
	return (ill/population) * pow(r, 2) * city_risk


print(caluculate_risk(1000000,1,2500))
print(caluculate_risk(10000,1,25))
