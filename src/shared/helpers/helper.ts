export class Helper {
    public licencePlateVerification(licencePlate: string | undefined): boolean {
        return /^[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}$/.test(licencePlate || '') === false ? true : false;
    }
}