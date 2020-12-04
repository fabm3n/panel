import styled from 'styled-components/macro';
import tw from 'twin.macro';
// @ts-ignore
import config from '../../../../tailwind.config';

const SubNavigation = styled.div`
    ${tw`w-full bg-neutral-700 shadow overflow-x-auto`};
    
    & > div {
        ${tw`flex items-center text-sm mx-auto px-2`};
        max-width: 1200px;
        
        & > a, & > div {
            ${tw`inline-block py-3 px-4 text-neutral-300 no-underline whitespace-no-wrap transition-all duration-150`};
            
            &:not(:first-of-type) {
                ${tw`ml-2`};
            }
            
            &:active, &:hover {
                ${tw`text-neutral-100`};
            }
            
            &:active, &:hover, &.active {
                box-shadow: inset 0 -2px ${config.theme.colors.cyan['500']};
            }
        }
    }
`;

export default SubNavigation;
