import { dashboard, expenses, transactions, trend } from "./icons/icons";

export const menuItems = [
    {
        id: 1,
        title: "Dashboard",
        icon: dashboard,
        link: "/dashboard",
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Income",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expense",
        icon: expenses,
        link: "/dashboard",
    }
]