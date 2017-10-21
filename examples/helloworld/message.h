#ifndef __ECHO_H_INCLUDED__
#define __ECHO_H_INCLUDED__

#include <string>

class Message {
  public:
    Message(std::string x) : n( x ){}
    void echo();
  private:
    std::string n;
};

#endif
