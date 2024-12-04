import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import type { SignUpData } from '../../types/auth';

interface SignUpFormProps {
  onSuccess: () => void;
  onSignIn: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess, onSignIn }) => {
  const { signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpData>();

  const onSubmit = async (data: SignUpData) => {
    try {
      await signUp(data);
      onSuccess();
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block font-body text-sm mb-2">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            {...register('firstName', { required: 'First name is required' })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg font-body focus:ring-0 focus:border-gray-300"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block font-body text-sm mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            {...register('lastName', { required: 'Last name is required' })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg font-body focus:ring-0 focus:border-gray-300"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

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
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg font-body focus:ring-0 focus:border-gray-300"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-3 font-body hover:bg-gray-900 transition-colors disabled:bg-gray-400"
      >
        {isSubmitting ? 'Creating account...' : 'Create Account'}
      </button>

      <div className="text-center">
        <p className="font-body text-sm text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSignIn}
            className="text-black hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;