import { Input } from 'components/Input'
import { HiAtSymbol } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Button } from 'components/Button'
import {Field, Form} from "react-final-form";
import styled from "styled-components";

const StyledError = styled.span`
  color: red;
`;

type FormType = {
  email: string,
  password: string,
  confirm: string,
}

const Register = () => {
  // const test = useQuery('categories', '/api/test')

  const handleSubmit = (values: FormType) => {
    console.log('values', values);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Form
        onSubmit={handleSubmit}
        validate={(values: FormType) => {
          const errors: {email?: string, password?: string, confirm?: string} = {}
          if (!values.email) {
            errors.email = 'Required'
          }
          if (!values.password) {
            errors.password = 'Required'
          }
          if (!values.confirm) {
            errors.confirm = 'Required'
          } else if (values.confirm !== values.password) {
            errors.confirm = 'Must match'
          }
          return errors
        }}
        render={({handleSubmit, form, submitting}) => (
          <form onSubmit={handleSubmit} className="p-6 max-w-sm w-full m-6 rounded-2xl bg-white shadow-2xl">
            <Field name="email">
              {({input, meta}) => (
                <div>
                  <label>Email</label>
                  <Input {...input} type="email" placeholder="Email" icon={HiAtSymbol}/>
                  {meta.error && meta.touched && <StyledError>{meta.error}</StyledError>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({input, meta}) => (
                <div>
                  <label>Hasło</label>
                  <Input {...input} type="password" placeholder="Hasło" icon={RiLockPasswordLine}/>
                  {meta.error && meta.touched && <StyledError>{meta.error}</StyledError>}
                </div>
              )}
            </Field>
            <Field name="confirm">
              {({input, meta}) => (
                <div>
                  <label>Confirm</label>
                  <Input {...input} type="password" placeholder="Potwierdź hasło" icon={RiLockPasswordLine}/>
                  {meta.error && meta.touched && <StyledError>{meta.error}</StyledError>}
                </div>
              )}
            </Field>
            <div>
              <Button type="submit" disabled={submitting} block>
                Rejestracja
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default Register;