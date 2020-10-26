import math

days_to_predict = 7
optimistic_index = 0.98


def calculate_R(infection):
    num_of_input_days = len(infection)
    AllR = 0

    for i in range(num_of_input_days - 1):
        new = infection[i]
        old = infection[i + 1]
        R = -1

        if(old == 0):
            R = new
        elif(old == 0 and new == 0):
            R = 0
        else:
            R = new / old
        AllR += R

    return(AllR / (num_of_input_days - 1))


def pessimistic_prediction(infection, R):
    pessimistic_prediction = [infection[0] * R]

    for i in range(days_to_predict):
        pessimistic_prediction.append(pessimistic_prediction[i] * R)

    return map(int, pessimistic_prediction)


def optimistic_prediction(infection, R):
    optimistic_prediction = [infection[0] * R]

    for i in range(days_to_predict):
        R = R * optimistic_index
        optimistic_prediction.append(optimistic_prediction[i] * R)

    return map(int, optimistic_prediction)


def caluculate_risk(population, r, ill):
	city_risk = (math.log2((population/1300000)*6+2)-1)/4 + 1

	return (ill/population) * max(1.25, pow(r, 2)) * city_risk
