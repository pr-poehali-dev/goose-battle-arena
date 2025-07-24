import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [createdMage, setCreatedMage] = useState<any>(null);

  const elements = {
    dark: {
      name: 'Теневые',
      color: 'from-purple-900 to-black',
      borderColor: 'border-purple-600',
      elements: [
        { name: 'Хаос', icon: 'Zap', description: 'Непредсказуемая разрушительная сила' },
        { name: 'Темнота', icon: 'Moon', description: 'Скрытность и теневые атаки' },
        { name: 'Молния', icon: 'Zap', description: 'Быстрые и смертоносные удары' },
        { name: 'Бездна', icon: 'Circle', description: 'Поглощение и пустота' }
      ]
    },
    light: {
      name: 'Светлые',
      color: 'from-yellow-400 to-white',
      borderColor: 'border-yellow-400',
      elements: [
        { name: 'Свет', icon: 'Sun', description: 'Исцеление и защита' },
        { name: 'Природа', icon: 'Leaf', description: 'Рост и восстановление' },
        { name: 'Исцеление', icon: 'Heart', description: 'Восстановление здоровья' }
      ]
    },
    neutral: {
      name: 'Нейтральные',
      color: 'from-gray-600 to-gray-400',
      borderColor: 'border-gray-500',
      elements: [
        { name: 'Огонь', icon: 'Flame', description: 'Прямой урон и поджог' },
        { name: 'Вода', icon: 'Droplets', description: 'Гибкость и контроль' },
        { name: 'Земля', icon: 'Mountain', description: 'Защита и стойкость' },
        { name: 'Воздух', icon: 'Wind', description: 'Скорость и маневренность' }
      ]
    }
  };

  const createMage = (elementType: string, element: any) => {
    const mage = {
      id: Date.now(),
      name: `Маг ${element.name}а`,
      element: element.name,
      type: elementType,
      power: Math.floor(Math.random() * 1000) + 500,
      health: Math.floor(Math.random() * 500) + 300,
      transformedToGoose: false
    };
    setCreatedMage(mage);
  };

  const transformToGoose = () => {
    if (createdMage) {
      setCreatedMage({
        ...createdMage,
        transformedToGoose: true,
        name: `Гусь ${createdMage.element}а`
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted to-background">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(/img/ba1f97a6-7505-4888-b5f4-b35582131e58.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-fantasy text-6xl md:text-8xl font-bold text-foreground mb-6 glow-effect">
            ГУСИНАЯ АРЕНА
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Эпические битвы магов, превращающихся в боевых гусей! 
            Выберите элемент, создайте мага и вступите в легендарную битву!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="font-fantasy text-lg px-8 py-4 animate-pulse-glow">
              <Icon name="Sword" className="mr-2" size={24} />
              Начать Битву
            </Button>
            <Button variant="outline" size="lg" className="font-fantasy text-lg px-8 py-4">
              <Icon name="Trophy" className="mr-2" size={24} />
              Рейтинг
            </Button>
          </div>
        </div>
      </div>

      {/* Element Selection */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-fantasy text-4xl font-bold text-center mb-12 text-foreground">
          Выберите Элементарную Силу
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(elements).map(([key, faction]) => (
            <Card key={key} className={`card-glow hover:scale-105 transition-all duration-300 ${faction.borderColor} border-2`}>
              <CardHeader>
                <CardTitle className={`font-fantasy text-2xl bg-gradient-to-r ${faction.color} bg-clip-text text-transparent`}>
                  {faction.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faction.elements.map((element, idx) => (
                    <div 
                      key={idx}
                      onClick={() => createMage(key, element)}
                      className="p-3 rounded-lg bg-muted hover:bg-accent/20 cursor-pointer transition-all duration-200 hover:scale-105"
                    >
                      <div className="flex items-center gap-3">
                        <Icon name={element.icon as any} size={24} className="text-accent" />
                        <div>
                          <h4 className="font-semibold text-foreground">{element.name}</h4>
                          <p className="text-sm text-muted-foreground">{element.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mage Creation */}
      {createdMage && (
        <div className="container mx-auto px-4 py-16">
          <h2 className="font-fantasy text-4xl font-bold text-center mb-12 text-foreground">
            Ваш Маг Создан!
          </h2>
          
          <div className="max-w-md mx-auto">
            <Card className="card-glow animate-fade-in">
              <CardHeader className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center element-shadow">
                    {createdMage.transformedToGoose ? (
                      <span className="text-6xl animate-float">🦢</span>
                    ) : (
                      <span className="text-6xl animate-float">🧙‍♂️</span>
                    )}
                  </div>
                </div>
                <CardTitle className="font-fantasy text-2xl text-foreground">
                  {createdMage.name}
                </CardTitle>
                <CardDescription>
                  <Badge variant="outline" className="text-accent border-accent">
                    {createdMage.element}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Сила:</span>
                  <span className="text-accent font-bold">{createdMage.power}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Здоровье:</span>
                  <span className="text-accent font-bold">{createdMage.health}</span>
                </div>
                
                {!createdMage.transformedToGoose ? (
                  <Button 
                    onClick={transformToGoose}
                    className="w-full font-fantasy text-lg animate-pulse-glow"
                  >
                    <Icon name="Zap" className="mr-2" size={20} />
                    Превратиться в Боевого Гуся!
                  </Button>
                ) : (
                  <div className="text-center">
                    <p className="text-accent font-bold mb-4">🎉 Превращение завершено! 🎉</p>
                    <Button className="w-full font-fantasy text-lg">
                      <Icon name="Sword" className="mr-2" size={20} />
                      Войти в Арену!
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Rules & Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="font-fantasy text-2xl text-foreground flex items-center gap-2">
                <Icon name="Scroll" size={24} />
                Правила Битвы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>• Каждый маг обладает уникальными способностями элемента</p>
              <p>• Перед битвой маг превращается в боевого гуся</p>
              <p>• Теневые элементы сильны против светлых</p>
              <p>• Светлые элементы исцеляют и защищают</p>
              <p>• Нейтральные элементы универсальны</p>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="font-fantasy text-2xl text-foreground flex items-center gap-2">
                <Icon name="Users" size={24} />
                Команды
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-400">Теневая Команда</h4>
                <p className="text-sm text-muted-foreground">Агрессивные разрушители с темной магией</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400">Светлая Команда</h4>
                <p className="text-sm text-muted-foreground">Защитники и целители мира</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-400">Нейтральные</h4>
                <p className="text-sm text-muted-foreground">Независимые воины стихий</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-fantasy">
            Создано для эпических гусиных сражений • 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;