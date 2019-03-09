import axios from 'axios'
import {generate, initDb} from 'til-server-test-utils'
import startServer from '../../start'

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=users%20integration&em=myemail@mailinator.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})

// eslint-disable-next-line no-unused-vars
let baseURL, api, server

jest.unmock('axios')

const port = 8788

beforeAll(async () => {
  server = await startServer({port})
  baseURL = `http://localhost:${server.address().port}/api`
  api = axios.create({baseURL})
})

afterAll(() => server.close())

beforeEach(() => initDb())

test('user CRUD', async () => {
  const loginForm = generate.loginForm()
  const createdUser = await axios
    .post(`auth/register`, loginForm)
    .then(r => r.data.user)
  console.log(createdUser.data)
  const result = await axios.get(`users`)
  console.log(result.data)
})
////////////////////////////////
