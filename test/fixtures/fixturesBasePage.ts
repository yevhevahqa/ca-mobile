import RandExp from 'randexp';
import Chance from 'chance';

export default class FixturesBasePage {
    private readonly VALID_AREA_CODES_USA: number[];
    private readonly states: string[][];
    private randexp: RandExp;

    constructor() {
        this.VALID_AREA_CODES_USA = [
            201, 239, 272, 308, 347, 369, 414, 440, 469, 515, 557, 574, 612, 641, 689, 704, 720, 781, 810, 860, 872, 901, 947, 985,
        ];
        this.states = [
            ['Arizona', 'AZ'],
            ['Alabama', 'AL'],
            ['Alaska', 'AK'],
            ['Arkansas', 'AR'],
            ['California', 'CA'],
            ['Colorado', 'CO'],
            ['Connecticut', 'CT'],
            ['Delaware', 'DE'],
            ['Florida', 'FL'],
            ['Georgia', 'GA'],
            ['Hawaii', 'HI'],
            ['Idaho', 'ID'],
            ['Illinois', 'IL'],
            ['Indiana', 'IN'],
            ['Iowa', 'IA'],
            ['Kansas', 'KS'],
            ['Kentucky', 'KY'],
            ['Louisiana', 'LA'],
            ['Maine', 'ME'],
            ['Maryland', 'MD'],
            ['Massachusetts', 'MA'],
            ['Michigan', 'MI'],
            ['Minnesota', 'MN'],
            ['Mississippi', 'MS'],
            ['Missouri', 'MO'],
            ['Montana', 'MT'],
            ['Nebraska', 'NE'],
            ['Nevada', 'NV'],
            ['New Hampshire', 'NH'],
            ['New Jersey', 'NJ'],
            ['New Mexico', 'NM'],
            ['New York', 'NY'],
            ['North Carolina', 'NC'],
            ['North Dakota', 'ND'],
            ['Ohio', 'OH'],
            ['Oklahoma', 'OK'],
            ['Oregon', 'OR'],
            ['Pennsylvania', 'PA'],
            ['Rhode Island', 'RI'],
            ['South Carolina', 'SC'],
            ['South Dakota', 'SD'],
            ['Tennessee', 'TN'],
            ['Texas', 'TX'],
            ['Utah', 'UT'],
            ['Vermont', 'VT'],
            ['Virginia', 'VA'],
            ['Washington', 'WA'],
            ['West Virginia', 'WV'],
            ['Wisconsin', 'WI'],
            ['Wyoming', 'WY'],
        ];
        this.randexp = new RandExp(/^[A-Za-z0-9]{8}$/);
    }

    formatDateForInputIfNeeded(date: string): string {
        if (date.includes('-')) {
            const d = date.split('-');
            return d[2] + d[1] + d[0];
        }
        return date;
    }

    getRandomEmail(mail = '@ggmail.com'): string {
        return this.randexp.gen() + String(+new Date()).slice(6, 11) + mail;
    }

    getValidUSPhoneNumber(): string {
        const chance = new Chance();
        const area_code = this.VALID_AREA_CODES_USA[chance.integer({ min: 0, max: this.VALID_AREA_CODES_USA.length - 1 })];
        const local_phone_number = chance.integer({
            min: 2010000,
            max: 9909999,
        });
        return area_code.toString() + local_phone_number.toString();
    }

    generateRandomSSN(regex = /^(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4}$/): string {
        this.randexp = new RandExp(regex); // Обновляем регулярное выражение
        return this.randexp.gen(); // Генерируем строку
    }

    getLastFourSSN(ssn: string): string {
        return ssn.substring(5);
    }

    stateToFullName(input: string, to: 'name' | 'abbr'): string | undefined {
        if (to === 'abbr') {
            input = input.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
            for (let i = 0; i < this.states.length; i++) {
                if (this.states[i][0] === input) {
                    return this.states[i][1];
                }
            }
        } else if (to === 'name') {
            input = input.toUpperCase();
            for (let i = 0; i < this.states.length; i++) {
                if (this.states[i][1] === input) {
                    return this.states[i][0];
                }
            }
        }
        return undefined;
    }

    formatToMoney(originalNumber: number, options?: Intl.NumberFormatOptions): string {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            ...options,
        });

        return formatter.format(originalNumber);
    }

    generateSpecificSSN(partOfNumber: string, position: string): string {
        const chance = new Chance();
        const local_phone_number = chance.integer({
            min: 100000000,
            max: 999999999,
        });
        if (position === 'start') {
            const full_number = partOfNumber.toString() + local_phone_number.toString();
            return full_number.slice(0, 9);
        } else {
            const full_number = local_phone_number.toString() + partOfNumber.toString();
            return full_number.slice(-9, full_number.length);
        }
    }

    generateSpecificPhoneNumber(partOfNumber: string, position: 'start' | 'end' | 'mask'): string {
        const local_phone_number = this.getValidUSPhoneNumber();
        if (position === 'start') {
            return String(local_phone_number).replace(new RegExp(`^.{${partOfNumber.length}}`), partOfNumber);
        }
        if (position === 'mask') {
            let maskedPhone = '';
            for (let index = 0; index < partOfNumber.length; index++) {
                partOfNumber[index] === 'x' ? (maskedPhone += local_phone_number[index]) : (maskedPhone += partOfNumber[index]);
            }
            return maskedPhone;
        }
        return String(local_phone_number).replace(new RegExp(`.{${partOfNumber.length}}$`), partOfNumber);
    }
}