const f = async () => {
  const res = await Promise.resolve('hello')
  document.body.innerText = res;
}

f()
