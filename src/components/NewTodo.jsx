import React from 'react'
import { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export const NewTodo = ({handleAdd}) => {
    const [task,settask] = useState("")
    console.log("renderelodik a NewTodo: ",task);
    
    const handleSubmit =()=>{
        handleAdd(task)
        settask("")
    }

    return (
        <div>
            <Form style={{display:"flex",gap:"5px",maxWidth:"600px"}}>
                <FormGroup style={{}}>
                    <Input
                        placeholder="new item"
                        type="text"
                        value={task}
                        onChange={(e)=>settask(e.target.value)}
                    />
                </FormGroup>
                <Button onClick={handleSubmit} disabled={!task}>Add</Button>
            </Form>

        </div>
    )
}

