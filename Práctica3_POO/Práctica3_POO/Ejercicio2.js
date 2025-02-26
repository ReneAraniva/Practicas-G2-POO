// 2. Sistema de gestión de cuentas bancarias
class CuentaBancaria {
  constructor(numeroCuenta, titular, saldo = 0) {
      // Se inicializan los datos de la cuenta bancaria
      this.numeroCuenta = numeroCuenta;
      this.titular = titular;
      this.saldo = saldo;
  }

  // Método para depositar dinero en la cuenta
  depositar(monto) {
      this.saldo += monto;
  }

  // Método para retirar dinero de la cuenta (verifica si hay fondos suficientes)
  retirar(monto) {
      if (monto <= this.saldo) {
          this.saldo -= monto;
      } else {
          console.log("Fondos insuficientes");
      }
  }

  // Método para consultar el saldo actual de la cuenta
  consultarSaldo() {
      return this.saldo;
  }
}

// Ejemplo de uso:
// Crear una nueva cuenta bancaria
const cuentaJuan = new CuentaBancaria("12345678", "Juan Pérez", 500);

// Consultar el saldo inicial de la cuenta
console.log("Saldo inicial de la cuenta:", cuentaJuan.consultarSaldo());

// Depositar dinero en la cuenta
cuentaJuan.depositar(200);
console.log("Saldo después de depositar 200:", cuentaJuan.consultarSaldo());

// Retirar dinero de la cuenta
cuentaJuan.retirar(100);
console.log("Saldo después de retirar 100:", cuentaJuan.consultarSaldo());

// Intentar retirar más dinero del que hay en la cuenta
cuentaJuan.retirar(700); // Esto mostrará "Fondos insuficientes"

// Consultar el saldo final
console.log("Saldo final de la cuenta:", cuentaJuan.consultarSaldo());