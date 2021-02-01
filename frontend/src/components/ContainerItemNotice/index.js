import React from  'react';

import {
    Container,
    ContainerItem
} from './styled';

export default (props) => {
    return(
        <Container>
            <ContainerItem text={props.text}>
                {props.text !== '' &&
                    props.text
                }
            </ContainerItem>
        </Container>
    );
}