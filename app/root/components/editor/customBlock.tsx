import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { defaultProps } from '@blocknote/core';
import { createReactBlockSpec } from '@blocknote/react';
import './editor.css';

export const CustomBlock = createReactBlockSpec(
  {
    type: 'customBlock',
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
    },
    content: 'inline',
  },
  {
    render: (props) => {
      return (
        <div className='flex min-h-max flex-grow items-center justify-center rounded bg-neutral-700 px-3'>
          <Accordion
            type='single'
            collapsible
            defaultValue='item-1'
            className='min-w-full max-w-full'
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger sideRight className='accordion-trigger'>
                {props.block.type}
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className='custom-block-content flex-grow'
                  ref={props.contentRef}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      );
    },
  },
);
