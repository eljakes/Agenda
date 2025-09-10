import { LoginForm } from "@/components/auth/LoginForm";

interface LoginProps {
  onLogin: (email: string, password: string, role: string) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  return <LoginForm onLogin={onLogin} />;
};

export default Login;