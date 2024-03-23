import * as yup from 'yup'

const pseudoPhrase = 'Le pseudo est invalide (entre 4 et 30 caractères)'
const emailPhrase = 'Veuillez entrez une adresse e-mail valide'

export const newVideoSchemas = yup.object().shape({
   pseudo: yup.string().required(pseudoPhrase).min(4, pseudoPhrase).max(30, pseudoPhrase).typeError(pseudoPhrase),
   email: yup.string().required().email(emailPhrase).typeError(emailPhrase)
})
