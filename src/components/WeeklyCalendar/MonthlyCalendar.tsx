import React, { useState, useMemo } from 'react';
import {
    View,
    Text,
    Pressable,
    GestureResponderEvent,
} from 'react-native';
import { styles } from './MonthlyCalendar.styles';
import { Event } from '../../types';

type MonthlyCalendarProps = {
    events: Event[];
};

export default function MonthlyCalendar({ events }: MonthlyCalendarProps) {

    function startOfMonth(date: Date) {
        const d = new Date(date);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        return d;
    }

    function daysInMonth(date: Date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    }

    function getStartOfGrid(firstOfMonth: Date) {
        const day = firstOfMonth.getDay();
        const offset = (day + 6) % 7;
        const gridStart = new Date(firstOfMonth);
        gridStart.setDate(firstOfMonth.getDate() - offset);
        return gridStart;
    }

    function formatDateKey(date: Date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }


    const [monthStart, setMonthStart] = useState(() => startOfMonth(new Date()));


    function handlePrevMonth(_e: GestureResponderEvent) {
        setMonthStart((prev) => {
            const d = new Date(prev);
            d.setMonth(prev.getMonth() - 1);
            return startOfMonth(d);
        });
    }
    function handleNextMonth(_e: GestureResponderEvent) {
        setMonthStart((prev) => {
            const d = new Date(prev);
            d.setMonth(prev.getMonth() + 1);
            return startOfMonth(d);
        });
    }


    const gridDates = useMemo(() => {
        const firstOfMonth = monthStart;
        const totalDays = daysInMonth(firstOfMonth);
        const gridStart = getStartOfGrid(firstOfMonth);
        const cells = Math.ceil((((firstOfMonth.getDay() + 6) % 7) + totalDays) / 7) * 7;
        return Array.from({ length: cells }).map((_, i) => {
            const d = new Date(gridStart);
            d.setDate(gridStart.getDate() + i);
            return d;
        });
    }, [monthStart]);


    const eventsByDate: Record<string, Event[]> = useMemo(() => {
        const map: Record<string, Event[]> = {};
        events.forEach((evt) => {
            if (evt.eventDate) {
                const key = formatDateKey(new Date(evt.eventDate));
                (map[key] = map[key] || []).push(evt);
            }
        });
        return map;
    }, [events]);


    const dayNames = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];


    const monthTitle = monthStart.toLocaleDateString('pt-BR', {
        month: 'long',
        year: 'numeric',
    });

    return (
        <View style={styles.container}>

            <View style={styles.nav}>
                <Pressable onPress={handlePrevMonth} style={styles.navButton}>
                    <Text style={styles.navText}>← Mês anterior</Text>
                </Pressable>
                <Text style={styles.monthText}>{monthTitle}</Text>
                <Pressable onPress={handleNextMonth} style={styles.navButton}>
                    <Text style={styles.navText}>Próximo mês →</Text>
                </Pressable>
            </View>


            <View style={styles.dayNamesRow}>
                {dayNames.map((dn) => (
                    <View key={dn} style={styles.dayNameCell}>
                        <Text style={styles.dayNameText}>{dn}</Text>
                    </View>
                ))}
            </View>


            <View style={styles.grid}>
                {gridDates.map((date) => {
                    const key = formatDateKey(date);
                    const inMonth = date.getMonth() === monthStart.getMonth();
                    const dayEvents = eventsByDate[key] || [];
                    return (
                        <View
                            key={key}
                            style={[styles.dayCell, !inMonth && styles.dayOutside]}
                        >
                            <Text style={[styles.dateText, !inMonth && styles.dateOutside]}>
                                {date.getDate()}
                            </Text>
                            {dayEvents.map((evt) => (
                                <View key={evt.id ?? evt.name ?? key} style={styles.eventBadge}>
                                    <Text style={styles.eventText} numberOfLines={1}>
                                        {evt.name}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
