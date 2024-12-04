import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import type { SignInData } from '../../types/auth';

interface SignInFormProps {
  onSuccess: () => void;
  onSignUp: () => void;
  onForgotPassword: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({
  onSuccess,
  onSignUp,
  onForgotPassword,
}) => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInData>();

  const onSubmit = async (data: SignInData) => {
    try {
      await signIn(data);
      onSuccess();
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="email" className="block font-body text-sm mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', { required: 'Email is required' })}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg font-body focus:ring-0 focus:border-gray-300"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block font-body text-sm mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register('password', { required: 'Password is required' })}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg font-body focus:ring-0 focus:border-gray-300"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <button
        type="button"
        onClick={onForgotPassword}
        className="font-body text-sm text-gray-600 hover:text-gray-900"
      >
        Forgot your password?
      </button>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-3 font-body hover:bg-gray-900 transition-colors disabled:bg-gray-400"
      >
        {isSubmitting ? 'Signing in...' : 'Sign In'}
      </button>

      <div className="text-center">
        <p className="font-body text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onSignUp}
            className="text-black hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;