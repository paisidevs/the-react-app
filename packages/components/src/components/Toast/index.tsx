import { Box, CloseButton, Flex, Text } from '@chakra-ui/core'
import React, { FC } from 'react'
import { AlertTriangle, Check } from 'react-feather'

interface ToastProps {
  icon?: React.ReactNode
  status: 'error' | 'success'
  title: string
  description?: string
  onClose: Function
  onClick?: Function
}

/**
 * @render react
 * @name Toast component
 * @description Custom toast component that overrides chakra-ui's toast component render.
 * @example
 *   toast({
 *     ...ERROR_TOAST,
 *     render: ({ onClose }) => (
 *       <Toast
 *         status="error"
 *         title="There has been an error."
 *         onClose={onClose}
 *       />
 *     ),
 *   });
 */

const Toast: FC<ToastProps> = ({ icon, status, title, description, onClose, onClick, ...rest }) => {
  let backgroundColor = status === 'success' ? 'green.400' : 'red.500'
  let iconBackgroundColor = status === 'success' ? 'green.300' : 'red.300'
  let Icon = status === 'success' ? Check : AlertTriangle

  return (
    <Flex maxWidth={560} padding={4} width="100%">
      <Box
        backgroundColor={backgroundColor}
        borderRadius={8}
        color="white"
        padding={4}
        width="100%"
        {...rest}
      >
        <Flex>
          <Box
            display="flex"
            alignItems="center"
            borderRadius={40}
            backgroundColor={iconBackgroundColor}
            justifyContent="center"
            size={45}
            minWidth={45}
          >
            {icon || <Icon size={24} strokeWidth={1.5} />}
          </Box>
          <Flex
            flexDirection="column"
            justifyContent="center"
            paddingLeft={4}
            paddingRight={2}
            onClick={() => onClick && onClick()}
          >
            <Text fontSize="sm" fontWeight={600} textAlign="left">
              {title}
            </Text>
            {description && (
              <Text fontSize="xs" textAlign="left">
                {description}
              </Text>
            )}
          </Flex>
          <CloseButton marginRight="-12px" marginTop="-12px" onClick={() => onClose()} />
        </Flex>
      </Box>
    </Flex>
  )
}

export default Toast
