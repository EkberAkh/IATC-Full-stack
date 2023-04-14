void main() {
  for (var i = 0; i <= 15; i++) {
    if (i <= 7) {
      int fibonacci = calculateFibonacci(i);
      print('$i-th fibonacci number is $fibonacci');
    } else {
      break;
    }
  }
}

int calculateFibonacci(int n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  }
}
