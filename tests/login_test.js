Feature('Login');

Scenario('Login com sucesso', ({ I }) => {

  I.amOnPage('https://automationpratice.com.br/');
  I.click('Login');
  I.waitForText('Login', 5);
  I.fillField('#user', 'hiarlleybrandao@gmail.com');
  I.fillField('#password', '123456');
  I.click('#btnLogin');
  I.waitForText('Login realizado', 3);

}).tag('@sucesso');

Scenario('Tentando logar digitando apenas o e-mail', ({ I }) => {

  I.amOnPage('https://automationpratice.com.br/');
  I.click('Login');
  I.waitForText('Login', 5)
  I.fillField('#user', 'hiarlleybrandao@gmail.com');
  I.click('#btnLogin');
  I.waitForText('Senha inválida.', 3)

}).tag('@falha');

Scenario('Tentando logar sem digitar e-mail e senha', ({ I }) => {

  I.amOnPage('https://automationpratice.com.br/');
  I.click('Login');
  I.waitForText('Login', 5);
  I.click('#btnLogin');
  I.waitForText('E-mail inválido.', 10);
  
}).tag('@falha');

Scenario('Tentando logar digitando apenas a senha', ({ I }) => {

  I.amOnPage('https://automationpratice.com.br/');
  I.click('Login');
  I.waitForText('Login', 5);
  I.fillField('#password', '123456');
  I.click('#btnLogin');
  I.waitForText('E-mail inválido.', 10);

}).tag('@falha');
