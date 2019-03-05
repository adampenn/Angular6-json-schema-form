export class ValidationMessagesUtil {

    private static validationMessages: any;

    public static setValidationMessages(validationMessages) {
        this.validationMessages = validationMessages;
    }

    public static getValidationMessages() {
        return this.validationMessages;
    }
}
