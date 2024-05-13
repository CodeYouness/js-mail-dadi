const mailList = ['capomafia@hotmail.com', 'lamiamail@mail.com', 'mailsegreta@protonmail.com']
const userMail = prompt('hey yo, whats your email?')

if (mailList.includes(userMail)) {
    console.log('congratulations! you re in')
} else {
    console.log('godo, you re not in')
}