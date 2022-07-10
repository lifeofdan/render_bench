import { Application, Request, Response } from 'express'

export default (app: Application) => [{
  home: app.get('/', (req: Request, res: Response) => {
    res.render('index');
  }),
  getLogin: app.get('/login', (req: Request, res: Response) => {
    res.render('login');
  }),
  postLogin: app.post('/login_submission', async(req: Request, res: Response) => {
    const clientData = { username: req.body.email, password: req.body.password };
    console.log('client data', clientData)
    const response = await fetch('http://nodejs:3000/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      credentials: 'include',
      body: `username=${req.body.email}&password=${req.body.password}`
    });

    if (response.ok) {
      console.log("headers", response)
      const data = await response.json();
      try {
        res.json(data);
      } catch (error) {
        res.json(error);
      }
    }
    // try {
    //   const { data } = await axios.post('http://nodejs:3000/login', clientData);
    //   res.send(data)
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     res.send(error.message)
    //   } else {
    //     return res.send(error)
    //   }
    // }
  }),
  benchmarks: app.get('/benchmarks', (req: Request, res: Response) => {
    const currentTime = new Date(Date.now());
    const startTime = currentTime.getTime()
    
    res.render('benchmarks', { startTime: startTime })
  })
}];