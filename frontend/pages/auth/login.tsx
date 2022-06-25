import {Input} from 'components/Input'
import {HiAtSymbol} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {Button} from 'components/Button'
import {Form, Field} from 'react-final-form'
import styled from 'styled-components';
import {useState} from "react";
import {router} from "next/client";
import {Router} from "next/router";

const StyledError = styled.span`
  color: red;
`;

type FormType = {
  email: string,
  password: string,
}

const Login = () => {
  // const test = useQuery('categories', '/api/test')
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (values: FormType) => {
    const response = await fetch("https://backend.dev/login", {
      method: 'POST',
      body: JSON.stringify(values)
    });
    if (response.status != 200) setError(true);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Form
        onSubmit={handleSubmit}
        validate={(values: FormType) => {
          const errors: {email?: string, password?: string} = {}
          if (!values.email) {
            errors.email = 'Required'
          }
          if (!values.password) {
            errors.password = 'Required'
          }
          return errors
        }}
        render={({handleSubmit, submitting}) => (
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
                  {error && <StyledError>Nieprawidłowe hasło!</StyledError>}
                </div>
              )}
            </Field>
            <div>
              <Button type="submit" disabled={submitting} block>
                Logowanie
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default Login;
