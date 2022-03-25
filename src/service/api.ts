const PRUEBA_KO = 'pruebaKO123'

const RESPONSE_OK = { status: 200 }
const RESPONSE_KO = { status: 401 }

interface Response {
  status: number
}

const submitForm = (pass: string) =>
  new Promise<Response>((resolve, reject) => {
    setTimeout(
      () => (pass !== PRUEBA_KO ? resolve(RESPONSE_OK) : reject(RESPONSE_KO)),
      3000
    )
  })

export default submitForm
