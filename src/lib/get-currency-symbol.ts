export const getCurrencySymbol = (currency: string) => {
    switch (currency) {
        case "USD":
            return "$";
        case "EUR":
            return "€";
        case "GBP":
            return "£";
        case "gbp":
            return "£";
        case "INR":
            return "₹";
        default:
            return currency;
    }
};
