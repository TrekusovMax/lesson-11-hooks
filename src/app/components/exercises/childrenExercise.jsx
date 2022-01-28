import React from "react";
import CollapseWrapper from "../common/collapse";

const AddNum = ({ children }) => {
    return React.Children.map(children, (child, index) => (
        <div className="d-flex">
            <div className="mx-2">{index + 1 + "."}</div>
            {React.cloneElement(child)}
        </div>
    ));
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <AddNum>
                <Component />
                <Component />
                <Component />
            </AddNum>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
