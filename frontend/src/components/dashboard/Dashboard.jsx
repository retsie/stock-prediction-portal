
import React, {useEffect} from 'react'
import axiosInstance from '../axiosinstance'

const Dashboard = () => {
    useEffect(()=>{
        const fetchProtectedData = async () => {
            try {
                const response = await axiosInstance.get('/protected-view')
                console.log('Success:', response.data);
            } catch(error) {
                console.error('error fetching data: ', error);
            }
        }
        fetchProtectedData();
    }, [])
  return (
    <>
    <div className="container mb-5">
        <div className="row">
          <div className='col-md-12 mt-5 mx-auto p-2'>
            <h2>Dashboard</h2>
            <table className="table table-success table-striped">
              <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@social</td>
                    </tr>
                </tbody>
            </table>
              
          </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard