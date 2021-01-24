import fetch from 'node-fetch'

const main = async () => {
  const resp = await fetch("http://localhost:5000/example/device", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'testdevice',
      note: 'testnote',
      type: 'raspberry',
    })
  })
  if (resp.status < 200 || resp.status > 299) {
    console.error('Database error ' + resp.status)
    console.error(await resp.text())
    process.exit(1)
  }
  console.log(await resp.text())
}

main()