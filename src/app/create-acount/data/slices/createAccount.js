export const createAccountSlice = set => ({
  account: {
    name: null,
    lastName: null,
    dni: null,
    email: null,
    password: null,
    confirmPassword: null,
    phone: null,
  },
  setAccount: newAccount => set(state => ({account: newAccount})),
})