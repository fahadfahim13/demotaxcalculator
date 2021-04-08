export interface BasicFormInput { 
    label: string;
    type: string;
    placeholder: string;
    name: string;
    onChange?: () => void;
}

const BasicFormInputDetails: BasicFormInput[] = [
    {
        label: 'First Name',
        type: 'text',
        placeholder: 'First Name',
        name: 'firstName'
    },
    {
        label: 'Last Name',
        type: 'text',
        placeholder: 'Last Name',
        name: 'lastName'
    },
    {
        label: 'Email',
        type: 'email',
        placeholder: 'Email',
        name: 'email'
    },
    {
        label: 'Phone',
        type: 'tel',
        placeholder: 'Phone Number',
        name: 'phone'
    },
    {
        label: 'Address',
        type: 'text',
        placeholder: 'Address',
        name: 'address'
    },
]

export default BasicFormInputDetails;