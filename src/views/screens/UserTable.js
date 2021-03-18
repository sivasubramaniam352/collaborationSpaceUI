import React, { useEffect, useState } from 'react'
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Collapse,
    Tooltip
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
import Select from 'react-select';
  
function UserTable() {
    const [Users, setUsers] = useState([
        {_id:'1', picture:'',username:'siva', as:'team-mate',},
        {_id:'2', picture:'', username:'raghu', as:'team-mate',},
        {_id:'3', picture:'', username:'logesh', as:'team-mate',},
        {_id:'4', picture:'',username:'siva', as:'team-mate',},
        {_id:'5', picture:'', username:'raghu', as:'team-mate',},
        {_id:'6', picture:'', username:'logesh', as:'team-mate',},    
        {_id:'7', picture:'',username:'siva', as:'team-mate',},
        {_id:'8', picture:'', username:'raghu', as:'team-mate',},
        {_id:'9', picture:'', username:'logesh', as:'team-mate',},
    ]);
const [enableEdit, setenableEdit] = useState('');
const [tooltipOpen, setTooltipOpen] = useState({open:false, id:'',content:''});

  const toggle = () => setTooltipOpen(!tooltipOpen);
    const getWorkSpaceUsers = async() =>{
        
    }
    useEffect(() => {
        
       getWorkSpaceUsers()
    }, [])
    const createUserRow = () =>{
        return Users.map((user, i) => {
            return  <><tr>
            <th scope="row"
            style={{width:'200px'}}

            >
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={
                      user.picture
                    }
                  />
                </a>
                <Media>
                  <span className="mb-0 text-sm">
                  {user.username}
                  </span>
                </Media>
              </Media>
            </th>
            <td
            style={{width:'100px'}}
            >{user.as}</td>
            <td
            style={{width:'200px'}}
            >
                    <div
                    style={{
                       
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-around'
                        
                    }}
                    >
                        <div
                        style={{
                            width:'40px',
                            height:'40px',
                            borderRadius:'40px',
                            backgroundColor:'lightblue',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                        id={"Tooltip-" + user._id}
                        onClick={() =>{
                            if (user._id === enableEdit) {
                                return setenableEdit('')     
                            }
                            return setenableEdit(user._id)
                            }}
                        >

<i class="fas fa-pen-nib"></i>
                        </div>

{/* <div
                        style={{
                            width:'40px',
                            height:'40px',
                            borderRadius:'40px',
                            backgroundColor:'lightgreen'
                        }}
                        ></div> */}

<div
                        style={{
                            width:'40px',
                            height:'40px',
                            borderRadius:'40px',
                            backgroundColor:'red',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                        >

<i class="fas fa-user-slash"></i>
                        </div>

                    </div>


            </td>
            </tr>

           <Collapse
           isOpen={enableEdit === user._id}
           >
               
            <div
            style={{
                height:'80px',
                backgroundColor:'lightblue',
                padding:10
            }}
            >
                <Select 
                options={[]}
                placeholder={'select role'}
                />
            </div>
           </Collapse>
              </>
        })
  }
    return (
        <div>
             <Card 
             
             className="user_table_container shadow">
              <CardHeader className="border-0">
                    <div
                    style={{
                        width:'100%',
                        display:'flex',
                        justifyContent:'space-between'
                    }}
                    >
                         <h3 className="mb-0">Team Mates</h3>

                         

                    </div>
               

        
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                   <div
                   style={{
                       display:'flex',
                       alignItems:'center',
                        justifyContent:'space-evenly'

                   }}
                   >
                       <th>
                           users
                       </th>
                       <th>
                           roles
                       </th>
                       <th>
                           actions
                       </th>
                   </div>
                  </tr>
                </thead>
            
                <tbody
             
                >
                    <div
                     style={{
                        height:'400px',
                        overflow:'scroll',

                    }}
                    >
   {createUserRow()}
                    </div>
              
                </tbody>
                
              </Table>
              <CardFooter className="py-4">
                {/* <nav aria-label="..."> */}
                  {/* <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination> */}
                {/* </nav> */}
              </CardFooter>
            </Card>

          
        </div>
    )
}

export default UserTable
