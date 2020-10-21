days_to_predict = 7
optimistic_index = 0.9


def calculate_R(infection):
    num_of_input_days = 7
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


def pessimistic_prediction(infection):
    R = calculate_R(infection)
    pessimistic_prediction = [infection[0] * R]

    for i in range(days_to_predict):
        pessimistic_prediction.append(pessimistic_prediction[i] * R)

    return pessimistic_prediction


def optimistic_prediction(infection):
    R = calculate_R(infection)
    optimistic_prediction = [infection[0] * R]

    for i in range(days_to_predict):
        R = R * optimistic_index
        optimistic_prediction.append(optimistic_prediction[i] * R)

    return optimistic_prediction