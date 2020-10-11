import React from "react"
import profileReducer, { addPostActionCreator, deletePost } from "./ProfileReducer"

let state = {
    PostData: [
        { id: 1, message: 'Hello my name AlexAdekvat', likesCount: 1 },
        { id: 2, message: ' It is my first page', likesCount: 12 },
    ]
};


// it('length of post should be incremented', () => {

//     //1.teat data

//     let action = addPostActionCreator("Test Post")
  
//     //2.action

//     let newState = profileReducer(state , action)

//     //3.expectation
//     expect(newState.PostData.length).toBe(3);
// });

// it('message of new post should be correct', () => {

//     //1.teat data

//     let action = addPostActionCreator("Test Post")

//     //2.action

//     let newState = profileReducer(state , action)

//     //3.expectation
//     expect(newState.PostData[2].message).toBe("Test Post");
// });

it(`after deleting length of message shouldn't be decrement if id is incorrect`, () => {

    //1.teat data

    let action = deletePost(10)

    //2.action

    let newState = profileReducer(state , action)

    //3.expectation
    expect(newState.PostData.length).toBe(2);
});


