{
  type Person = {
    name: string;
    age: number;
    role: string;
    email: string;
    tel: number;
  };

  //   omit
  type BasicInfo = Omit<Person, 'email' | 'tel'>;

  // pick
  type ContactInfo = Pick<Person, 'email' | 'tel'>;

  // Partial
  type PersonOptional = Partial<Person>;

  //   Required
  type PersonRequired = Required<Person>;

  //   Readonly
  type PersonReadonly = Readonly<Person>;

  //   Record

  type PersonRecord = Record<string, string>;
  const personRecord: Record<string, string> = {
    1: 'John',
    name: 'Jane',
    age: '30',
    role: 'admin',
  };
  const personRecord2: Record<string, any | unknown | undefined> = {
    1: 'John',
    name: 'Jane',
    age: 30,
    role: 'admin',
  };
}
