//?make a function account and variable balance while depositing and withdrawing and see our balance.
function account() {
  let balance = 00000;
  return {
    deposit: (amount) => {
      balance += amount;
      console.log(
        amount > 0
          ? `Your acc got credited by $${amount}. Your new balance is $${balance}`
          : "Please enter a valid amount"
      );
    },
    withDraw: (amount) => {
      console.log(
        amount > balance
          ? "Sorry! You don't have the sufficient amount to withdraw"
          : (balance -= amount`Your acc got by debited $${amount}. Your new balance is ${balance}`)
      );
    },
    seeBalance: () => {
      console.log(`Your current balance is $${balance}`);
    },
  };
}
const newBalance = account();
newBalance.deposit(200);
newBalance.withDraw(300);
newBalance.seeBalance();
