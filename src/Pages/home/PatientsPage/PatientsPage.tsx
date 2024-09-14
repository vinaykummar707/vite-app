import {Button, Flex, Group, Modal, Text} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

export const PatientsPage = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <Flex bg={'gray.0'} h={'100vh'} p={'lg'} direction={'column'} flex={'1'} >
            <Group justify="space-between">
                <Text size={'xxl'} fw={'bold'}>Patients</Text>
                <Button radius={'0'} onClick={open}>Open modal</Button>
            </Group>

            <Modal  radius={'0'} centered opened={opened} onClose={close} title="Authentication">
                {/* Modal content */}
            </Modal>
        </Flex>
    );
};
