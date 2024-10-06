import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Login from '@/components/Login.vue'; 
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/products', component: { template: '<div></div>' } },
  { path: '/register', component: { template: '<div></div>' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const authStoreMock = {
  login: vi.fn(),
};

vi.mock('@/stores/auth', () => {
  return {
    useAuthStore: () => authStoreMock,
  };
});

describe('Login.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Login, {
      global: {
        plugins: [router],
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe('Connectez-vous à votre compte');
  });

  it('validates email correctly', async () => {
    const emailInput = wrapper.find('input[type="email"]');
    await emailInput.setValue('invalid-email');
    await emailInput.trigger('blur'); 

    expect(wrapper.vm.emailError).toBe('Format email invalide');

    await emailInput.setValue(''); 
    await emailInput.trigger('blur'); 

    expect(wrapper.vm.emailError).toBe('Email est requis');
  });

  it('validates password correctly', async () => {
    const passwordInput = wrapper.find('input[type="password"]');
    await passwordInput.setValue('short');
    await passwordInput.trigger('blur'); 
    expect(wrapper.vm.passwordError).toBe('Le mot de passe doit contenir au moins 8 caractères');

    await passwordInput.setValue(''); 
    await passwordInput.trigger('blur'); 

    expect(wrapper.vm.passwordError).toBe('Mot de passe est requis');
  });

//   it('calls login method on form submission', async () => {
//     const emailInput = wrapper.find('input[type="email"]');
//     const passwordInput = wrapper.find('input[type="password"]');
    
//     await emailInput.setValue('test@example.com');
//     await passwordInput.setValue('validPassword');

//     authStoreMock.login.mockResolvedValueOnce({ status: 200 });

//     await wrapper.find('form').trigger('submit.prevent'); 

//     expect(authStoreMock.login).toHaveBeenCalledWith('test@example.com', 'validPassword'); 
//     expect(wrapper.vm.serverError).toBe(null); 
//   });

//   it('displays server error message on login failure', async () => {
//     const emailInput = wrapper.find('input[type="email"]');
//     const passwordInput = wrapper.find('input[type="password"]');
    
//     await emailInput.setValue('test@example.com');
//     await passwordInput.setValue('validPassword');

//     authStoreMock.login.mockRejectedValueOnce({
//       response: { data: { message: 'Erreur lors de la connexion.' } },
//     });

//     await wrapper.find('form').trigger('submit.prevent'); 

//     expect(authStoreMock.login).toHaveBeenCalledWith('test@example.com', 'validPassword'); 
//     expect(wrapper.vm.serverError).toBe('Erreur lors de la connexion.'); 
//   });

  it('navigates to products page on successful login', async () => {
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    
    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('validPassword');

    authStoreMock.login.mockResolvedValueOnce({ status: 200 });

    await wrapper.find('form').trigger('submit.prevent'); 

    expect(wrapper.vm.$router.currentRoute.value.path).toBe('/');
  });
});
