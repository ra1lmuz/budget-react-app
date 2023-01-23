// Фильтр расходов
import { OPERATION_TYPES } from "../types/operations";

export const filterExpense = (data) => {
    return data.filter((item) => {
        return item.type === OPERATION_TYPES.EXPENSE;
    });
}

// Фильтр доходов
export const filterIncome = (data) => {
    return data.filter((item) => {
        return item.type === OPERATION_TYPES.INCOME;
    });
}