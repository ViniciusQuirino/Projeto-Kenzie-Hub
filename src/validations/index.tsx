import * as yup from "yup";

export const schemaSignup = yup.object({
    name: yup
        .string()
        .required('Nome obrigatório'),
    email: yup
        .string()
        .required('E-mail obrigatório')
        .email('Preencher o email corretamente'),
    password: yup
        .string()
        .required('Senha obrigatória!')
        .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
        .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
        .matches(/(\d)/, 'Deve conter ao menos um número')
        .matches(/(\W)|_/, 'Deve conter um caracter especial')
        .matches(/.{8,}/, 'Deve ter no mínimo 8 digitos'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Confirmação de senha deve ser igual a senha'),
    bio: yup.string().required('Necessário preencher o campo'),
    contact: yup.string().required('Link de contato obrigatório').url("Necessário que seja uma url")
})

export const schemaLogin = yup.object({
    email: yup
        .string()
        .required("E-mail obrigatório"),
    password: yup
        .string()
        .required("Senha obrigatória")
})

export const schemaModal = yup.object({
    title: yup
        .string()
        .required('Campo obrigatório'),
})