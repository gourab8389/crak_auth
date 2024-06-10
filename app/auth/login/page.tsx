import { LoginForm } from "@/components/auth/login-form";

const LoginPage = () => {
  return ( 
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-lg">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <LoginForm />
      </div>
    </div>
  );
}
 
export default LoginPage;
