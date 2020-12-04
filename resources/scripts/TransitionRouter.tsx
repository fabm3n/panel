import React, { useRef } from 'react';
import { Route } from 'react-router';
import { SwitchTransition } from 'react-transition-group';
import Fade from '@/components/elements/Fade';
import styled from 'styled-components/macro';
import tw from 'twin.macro';
import v4 from 'uuid/v4';

const StyledSwitchTransition = styled(SwitchTransition)`
    ${tw`relative`};
    
    & section {
        ${tw`absolute w-full top-0 left-0`};
    }
`;

const TransitionRouter: React.FC = ({ children }) => {
    const uuid = useRef(v4()).current;

    return (
        <Route
            render={({ location }) => (
                <StyledSwitchTransition>
                    <Fade timeout={150} key={location.key || uuid} in appear unmountOnExit>
                        <section>
                            {children}
                        </section>
                    </Fade>
                </StyledSwitchTransition>
            )}
        />
    );
};

export default TransitionRouter;
