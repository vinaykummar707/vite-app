import {useDisclosure} from "@mantine/hooks";
import {AppShell, Flex, NavLink, Text} from "@mantine/core";
import {
    RiBarChart2Line,
    RiCalendarScheduleFill,
    RiDashboard2Line,
    RiFingerprintLine, RiGroupLine,
    RiHome7Line
} from "@remixicon/react";
import {Outlet} from "react-router-dom";

const HomePage = () => {
    const [opened, {toggle}] = useDisclosure();
    const data = [
        {icon: RiDashboard2Line, label: 'Dashboard', active: true},
        {
            icon: RiFingerprintLine,
            label: 'Security', active: false

        },
        {icon: RiBarChart2Line, label: 'Activity', active: false},
    ];
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

            <AppShell.Navbar bg={'brand.9'}  p="lg">
                <Flex h={'100%'} direction={'column'} gap={''} justify={'space-between'}>
                    <Text fw={'bold'} size={'xl'} c={'white'}>Nephbuddy</Text>

                    <Flex direction={'column'} gap={'4px'}>
                        <Flex bg={'white'} px={'12px'} py={'8px'} direction={'row'} gap={'sm'} align={'center'}>
                            <RiCalendarScheduleFill size={22} color={'black'}/>
                            <Text fw={'700'} size={'md'} c={'black'}>Shifts</Text>
                        </Flex>
                        <Flex px={'12px'} py={'8px'} direction={'row'} gap={'sm'} align={'center'}>
                            <RiHome7Line size={22} color={'white'}/>
                            <Text fw={'500'} size={'md'} c={'white'}>Dashboard</Text>
                        </Flex>
                        <Flex px={'12px'} py={'8px'} direction={'row'} gap={'sm'} align={'center'}>
                            <RiGroupLine size={22} color={'white'}/>
                            <Text fw={'500'} size={'md'} c={'white'}>Patients</Text>

                    </Flex>

                        {/*{data.map((item, index) => (*/}
                        {/*    <NavLink*/}
                        {/*        autoContrast*/}
                        {/*        key={item.label}*/}
                        {/*        label={<Text fw={'bold'}> {item.label} </Text>}*/}
                        {/*        leftSection={<item.icon  size="1.6rem"/>}*/}
                        {/*        color="brand"*/}
                        {/*        variant="light"*/}
                        {/*        active={item.active}*/}
                        {/*    />*/}
                        {/*))}*/}

                    </Flex>

                    <Text size={'xs'} c={'dark.2'}>@All Rights Reserved.2024-2028</Text>

                </Flex>
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
};
// #816B8D
export default HomePage;
