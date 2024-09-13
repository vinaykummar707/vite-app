import {AppShell, Avatar, Burger, Flex, TableData, Text} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {ShiftsPage} from "./Pages/Shifts/ShiftsPage.tsx";
import {
    RiCalendarScheduleFill,
    RiCalendarScheduleLine, RiGroupFill, RiGroupLine,
    RiHome2Fill,
    RiHome2Line,
    RiHome3Fill,
    RiHome7Fill, RiHome7Line
} from "@remixicon/react";

export default function App() {
    const [opened, {toggle}] = useDisclosure();

    return (
        <AppShell
            withBorder={false}
            navbar={{
                width: '16%',
                breakpoint: 'sm',
                collapsed: {mobile: !opened},
            }}
        >
            {/*<AppShell.Header p="md">*/}

            {/*    <Flex h={'100%'} justify={'end'} direction="row" align={'center'}>*/}
            {/*        <Avatar color="cyan" radius="xl">MK</Avatar>*/}

            {/*    </Flex>*/}
            {/*</AppShell.Header>*/}

            <AppShell.Navbar bg={'brand.10'}  p="md">
                <Flex h={'100%'} direction={'column'} gap={''} justify={'space-between'} >
                    <Text fw={'bold'} size={'xl'}  c={'white'}>Nephbuddy</Text>

                    <Flex   direction={'column'} gap={'4px'}>
                        <Flex bg={'white'} px={'12px'} py={'8px'} direction={'row'} gap={'sm'} align={'center'} >
                            <RiCalendarScheduleFill size={22} color={'black'}/>
                            <Text fw={'700'} size={'md'}  c={'black'}>Shifts</Text>
                        </Flex>
                        <Flex   px={'12px'} py={'8px'} direction={'row'} gap={'sm'} align={'center'} >
                            <RiHome7Line size={22} color={'white'}/>
                            <Text fw={'500'} size={'md'}  c={'white'}>Dashboard</Text>
                        </Flex>
                        <Flex  px={'12px'} py={'8px'} direction={'row'} gap={'sm'} align={'center'} >
                            <RiGroupLine size={22} color={'white'}/>
                            <Text fw={'500'} size={'md'}  c={'white'}>Patients</Text>
                        </Flex>

                    </Flex>
                    <Text  size={'xs'}  c={'dark.2'}>@All Rights Reserved.2024-2028</Text>

                </Flex>
            </AppShell.Navbar >

            <AppShell.Main  bg={''}>
                    <ShiftsPage/>
            </AppShell.Main>
        </AppShell>
    );
}
