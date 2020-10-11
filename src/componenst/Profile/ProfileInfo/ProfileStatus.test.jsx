const { create } = require("react-test-renderer");
import React from 'react'
import ProfileStatus from './ProfileStatus';


// describe("ProfileStatus component", () => {
//     test("status from props should be in the state", () => {
//         const component = create(<ProfileStatus status="Hello Word" />);
//         const instance = component.getInstance();
//         expect(instance.state.status).toBe("Hello Word");
//     });
// });

// describe("ProfileStatus component", () => {
//     test("after creation <span> with status should be displayed with correct status", () => {
//         const component = create(<ProfileStatus status="Hello Word" />);
//         const root = component.root;
//         let span = root.findByType("span");
//         expect(span).not.toBeNull();
//     });
// });

// describe("ProfileStatus component", () => {
//     test("aftwr creation <input> with status should be displayed with correct status", () => {
//         const component = create(<ProfileStatus status="Hello Word" />);
//         const root = component.root;
//         expect(()=>{
//         let input = root.findByType("input");
//         }).toThrow();
//     });
// });



// // describe("ProfileStatus component", () => {
// //     test("after creation <span> with status should contains correct status", () => {
// //         const component = create(<ProfileStatus status="Hello Word" />);
// //         const root = component.root;
// //         let span = root.findByType("span");
// //         expect(span.children[0]).toBe("Hello world");
// //     });
// // });
//пересмотреть40 минута 92 выпуск


// describe("ProfileStatus component", () => {
//     test("input shuld be displayed in editModeinstead of span", () => {
//         const component = create(<ProfileStatus status="Hello World" />);
//         const root = component.root;
//         let span = root.findByType("span");
//         span.props.onDoubleClick()
//         let input = root.findByType("input");
//         expect(input.props.value).toBe("Hello World");
//     });
// });

describe("ProfileStatus component", () => {
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="Hello World" updateStatus={mockCallback} />);
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

