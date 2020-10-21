infection = [64, 32, 16, 8, 4, 2, 1] #vcera, predevcirem atd.
AllR = 0
num_of_input_days = 7
days_to_predict = 3
optimistic_index = 0.9

for i in  range(num_of_input_days - 1):
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

NumberR = AllR / (num_of_input_days - 1)

pessimistic_prediction = [infection[0] * NumberR]

for i in range(days_to_predict):
    pessimistic_prediction.append(pessimistic_prediction[i] * NumberR)

optimistic_prediction = [infection[0] * NumberR]

for i in range(days_to_predict):
    NumberR = NumberR * optimistic_index
    optimistic_prediction.append(optimistic_prediction[i] * NumberR)
    print(optimistic_prediction[i])
